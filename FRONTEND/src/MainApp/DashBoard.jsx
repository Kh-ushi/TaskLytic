
import "./DashBoard.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartJSPluginDataLabels from "chartjs-plugin-datalabels";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const TaskOverview = [
    {
        name: "ZeCoin",
        tasksDone: 76,
        totalTasks: 118,
        percentage: 65,
        members: 11,
        comments: 73,
        logo: "🔵",
    },
    {
        name: "Grit",
        tasksDone: 56,
        totalTasks: 140,
        percentage: 40,
        members: 7,
        comments: 120,
        logo: "🟡",
    },
    {
        name: "Catalyst",
        tasksDone: 61,
        totalTasks: 180,
        percentage: 34,
        members: 3,
        comments: 78,
        logo: "🔴",
    },
    {
        name: "Catalyst",
        tasksDone: 61,
        totalTasks: 180,
        percentage: 34,
        members: 3,
        comments: 78,
        logo: "🔴",
    },
    {
        name: "Catalyst",
        tasksDone: 61,
        totalTasks: 180,
        percentage: 34,
        members: 3,
        comments: 78,
        logo: "🔴",
    },
    {
        name: "Catalyst",
        tasksDone: 61,
        totalTasks: 180,
        percentage: 34,
        members: 3,
        comments: 78,
        logo: "🔴",
    },
    {
        name: "Catalyst",
        tasksDone: 61,
        totalTasks: 180,
        percentage: 34,
        members: 3,
        comments: 78,
        logo: "🔴",
    },
];


const DailyTasks = [
    {
        Name: "John Doe Meeting",
        Time: "10:00 am",
        Duration: "10:00 - 11:00"
    },
    {
        Name: "Jane Smith Meeting",
        Time: "11:00 am",
        Duration: "11:00 - 12:30"
    },
    {
        Name: "Alice Johnson",
        Time: "1:30 pm",
        Duration: "1:30 - 2:00"
    },
    {
        Name: "Bob Brown",
        Time: "3:00 pm",
        Duration: "3:00 - 3:30"
    },
    {
        Name: "Charlie Davis",
        Time: "4:30 pm",
        Duration: "4:30 - 5:00"
    }
];


const RecentMessages = [
    {
        name: "Khushi Gupta",
        numberOfRecentMessages: 2,
        recentMessage: "Hey there, what’s the update?",
        lastTime: "3:00 PM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    },
    {
        name: "Aarav Mehta",
        numberOfRecentMessages: 5,
        recentMessage: "Let's schedule the meeting for tomorrow.",
        lastTime: "10:15 AM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    },
    {
        name: "Simran Kaur",
        numberOfRecentMessages: 1,
        recentMessage: "Can you share the latest report?",
        lastTime: "7:45 PM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    },
    {
        name: "Rahul Sharma",
        numberOfRecentMessages: 3,
        recentMessage: "Great job on the project!",
        lastTime: "2:30 PM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    },
    {
        name: "Neha Verma",
        numberOfRecentMessages: 4,
        recentMessage: "Let’s catch up later in the evening.",
        lastTime: "6:20 PM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    },
    {
        name: "Vikram Singh",
        numberOfRecentMessages: 2,
        recentMessage: "I'll send the files in a moment.",
        lastTime: "11:05 AM",
        image: "https://image.lexica.art/full_webp/3e544759-651e-4df9-b158-c5f39cd1e18a"
    }
];





ChartJS.register(ArcElement, Tooltip, Legend, ChartJSPluginDataLabels);

const data = {
    labels: ["21%", "17%", "13%", "12%", "12%", "10%", "8%", "7%"],
    datasets: [
        {
            data: [21, 17, 13, 12, 12, 10, 8, 7], // Values should sum to 100
            backgroundColor: [
                "#A0A8FF", "#A3DAF8", "#B6F7B6", "#FFBE98",
                "#FFC786", "#FF9DB2", "#FFE38A", "#C1B3FF"
            ],
            borderWidth: 0,
            cutout: "70%", // Creates the donut hole
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Hide legend
        },
        datalabels: {
            color: "#000", // Text color
            font: {
                size: 14, // Adjust font size
                weight: "bold",
            },
            formatter: (value, ctx) => {
                return ctx.chart.data.labels[ctx.dataIndex]; // Display percentage
            },
        },
    },
};

const DashBoard = () => {

    const [index, setIndex] = useState(0);

    const [date, setDate] = useState(new Date());

    const next = () => {
        if (index < TaskOverview.length - 1) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <div className="DashBoard">
            <div className="left-side">

                <div className="task-details">
                    <div className="detail"><div className="quantity" style={{ color: "#3674B5" }}>394</div><div>Total Projects</div></div>
                    <div className="detail"><div className="quantity" style={{ color: "#F0A04B" }}>130</div><div>Ongoing Projects</div></div>
                    <div className="detail"><div className="quantity" style={{ color: "#DE3163" }}>210</div><div>Completed Projects</div></div>
                    <div className="detail"><div className="quantity" style={{ color: "#5B913B" }}>50</div><div>Upcoming Projects</div></div>
                </div>

                <div className="tasks-container">
                    <div className="tasks-container-header">
                    <h2 className="title">Project Overview</h2>
                    
                    <div className="buttons">
                        <button onClick={prev} disabled={index === 0} className="nav-button">
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            disabled={index === TaskOverview.length - 1}
                            className="nav-button"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                    </div>
                    <div className="slider-container">

                        <motion.div className="slider" animate={{ transform: `translateX(-${index * 200}px)` }}>
                            {TaskOverview.map((project, i) => (
                                <div key={i} className="card">
                                    <div className="card-header">
                                        <span className="logo">{project.logo}</span>
                                        <h3 className="project-name">{project.name}</h3>
                                    </div>
                                    <p className="task-info">
                                        Task Done: {project.tasksDone}/{project.totalTasks}
                                    </p>
                                    <div className="progress-bar">
                                        <div
                                            className="progress"
                                            style={{ width: `${project.percentage}%` }}
                                        ></div>
                                    </div>

                                    <div className="card-footer">
                                        <span className="members">+{project.members}</span>
                                        <span className="comments">
                                            <MessageCircle size={16} /> {project.comments}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </motion.div>

                    </div>
{/* 
                    <div className="buttons">
                        <button onClick={prev} disabled={index === 0} className="nav-button">
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            disabled={index === TaskOverview.length - 1}
                            className="nav-button"
                        >
                            <ChevronRight />
                        </button>
                    </div> */}

                </div>

                <div className="task-analysis">

                    <div className="pie-chart">


                        <div className="doughnut-info">
                            <div><h4 >Project Categories</h4></div>
                            <div className="categories">
                                <ul>
                                    <li>Web Development</li>
                                    <li>UI/UX</li>
                                    <li>Marketing</li>
                                    <li>Branding</li>
                                    <li>Sales</li>
                                    <li>Seo</li>
                                    <li>Mobile App Dev</li>
                                    <li>Data Analysis</li>
                                    <li>Others</li>
                                </ul>
                            </div>
                        </div>
                        <div className="doughnut">
                            <div className="chart"><Doughnut data={data} options={options} /></div>
                        </div>
                    </div>
                    <div className="daily-task">
                        <div className="daily-task-header">
                            <h4 >Daily Tasks</h4>
                            <button>Add Task +</button>
                        </div>

                        <div className="all-daily-tasks">
                            {DailyTasks.map((task, i) => (
                                <div className="task-info">
                                    <h4>{task.Time}</h4>
                                    <div >
                                        <h4>{task.Name}</h4>
                                        <p>{task.Duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

            </div>
            <div className="right-side">
                <div className="calendar">
                    <Calendar className="actual-calendar" onChange={setDate} value={date} />
                    {/* <p>Selected Date: {date.toDateString()}</p> */}
                </div>
                <div className="recent-messages">
                    <div className="heading-message"><h4>Messages</h4></div>
                    <div className="all-recent-messages">
                        {RecentMessages.map((msg, i) => (
                            <div className="message-info" key={i}>
                                <div className="first">
                                    <img src={msg.image} alt="image"></img>
                                    <div>
                                        <h4>{msg.name}</h4>
                                        <p>{msg.recentMessage}</p>
                                    </div>

                                </div>
                                <div className="second">
                                    <div>{msg.numberOfRecentMessages}</div>
                                    <p>{msg.lastTime}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )

}

export default DashBoard;