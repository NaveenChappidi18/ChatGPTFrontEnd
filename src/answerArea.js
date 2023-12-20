import React,{useState,useEffect} from 'react';
import './answerArea.css';
const AnswerArea = ({ data }) => {
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/getResponse", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: data,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const responseData = await response.json();
                const { content } = responseData;
                setAnswer(content);  
                console.log("Data fetched successfully:", content);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [data]);

    return (
        <div className="answerArea">
            <h1>{data}</h1>
            <h4>{answer}</h4>
    

        </div>
    );
}
export default AnswerArea;