import React from 'react';

import { ShowTodoApp } from '../containers/ShowTodoApp';

import './Dashboard.css';

export const Dashboard = () => {
    return (
        <div className="container">
            <ShowTodoDashboard />
        </div>
    );
};
