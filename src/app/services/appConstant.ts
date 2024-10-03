// app.constants.ts

export class AppConstants {
    static assignedToOptions = [
        { id: '1', name: 'User 1' },
        { id: '2', name: 'User 2' },
        { id: '3', name: 'User 3' },
        { id: '4', name: 'User 4' },
    ];

    static statusOptions = [
        { value: 'pending', label: 'Pending' },
        { value: 'in_progress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
    ];

    static priorityOptions = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
    ];
    static taskList = [
        {
            id:'1',
            selected: false,
            assignedTo: { id: '1', name: 'User 1' },
            status: { value: 'pending', label: 'Pending' },
            dueDate: new Date('2024-10-15'),
            priority: { value: 'low', label: 'Low' },
            comments: 'Need to finalize the report.'
        },
        {
            id:'2',
            selected: false,
            assignedTo: { id: '2', name: 'User 2' },
            status: { value: 'in_progress', label: 'In Progress' },
            dueDate: new Date('2024-09-20'),
            priority: { value: 'medium', label: 'Medium' },
            comments: 'All tasks completed successfully.'
        },
        {
            id:'3',
            selected: false,
            assignedTo: { id: '3', name: 'User 3' },
            status: { value: 'completed', label: 'Completed' },
            dueDate: new Date('2024-10-30'),
            priority: { value: 'high', label: 'High' },
            comments: 'Waiting for feedback.'
        },
        {
            id:'4',
            selected: false,
            assignedTo: { id: '4', name: 'User 4' },
            status: { value: 'completed', label: 'Completed' },
            dueDate: new Date('2024-10-30'),
            priority: { value: 'high', label: 'High' },
            comments: 'Waiting for feedback.'
        }
        
    ];
}
