import { useState } from 'react';
import CustomCard from './Components/customCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { reshuffleQuestionList, reShuffleListFunc } from './App';

export function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);


    // question handler
    const list_of_Answer_handler = (isCorrect) => {

        if (isCorrect) {
            setScore(score + 1);
        }

        // nextquestion index
        const nextQuestion = currentQuestion + 1;

        //handling all question and end result
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };


    // restart the quiz
    const restartGame = () => {
        //initialize the parameter 
        setShowScore(false);
        setCurrentQuestion(0);
        setScore(0);
    };

    // end result text
    let congratulationsText = <p>Congratulations!<br /> You've scored {score} out of {questions.length}</p>;
    let failedText = <p>Failed! <br /> You've scored {score} out of {questions.length}</p>;

    return (
        <div className="App">
            {showScore ?
                (
                    <div className={`p-5 common_card ${(score / questions.length) * 100 >= passmark ? 'card-1' : 'card-2'}`}>
                        <h2 className="card__title">{(score / questions.length) * 100 >= passmark ? congratulationsText : failedText}</h2>
                        <Button variant="light" onClick={restartGame}>Restart</Button>
                    </div>
                ) : (
                    <>
                        <CustomCard currentQuestion={currentQuestion} questions={reshuffleQuestionList} />

                        <Card className='card-color common_card rounded-0'>
                            <Card.Body>
                                {reShuffleListFunc(questions[currentQuestion].options).map((answerOption, index) => (
                                    <ListGroup as="ol">
                                        <ListGroup.Item
                                            key={index}
                                            as="li"
                                            className={`d-flex button btn1`}

                                            onClick={() => {
                                                list_of_Answer_handler(answerOption.isCorrect);
                                            }}
                                        >
                                            {answerOption.label}
                                        </ListGroup.Item>
                                    </ListGroup>
                                ))}
                            </Card.Body>
                        </Card>
                    </>
                )}
        </div>
    );
}
