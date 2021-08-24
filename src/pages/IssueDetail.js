import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm"
import RelativeTime from '../components/RelativeTime';

function IssueDetail() {
    const { issueId } = useParams();
    const [issueData, setIssueData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setIssueData(data);
            });
    }, [issueId]);
    
    if (!issueData) {
        return "";
    }

    const { title, number, created_at, user, body } = issueData;
    return (
        <div>
            <h1>{title}</h1>
            <h4>#{number} opened <RelativeTime date={created_at} /> by {user.login}</h4>
            <ReactMarkdown remarkPlugins ={[remarkGfm]}>
                {body}
            </ReactMarkdown>
        </div>
    );
}

export default IssueDetail