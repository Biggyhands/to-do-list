import{Select, Input, Button, Grid, Header, Icon} from 'semantic-ui-react'
import{useState} from 'react';
import{v4 as uuidv4} from 'uuid';


const options =[ 
    {key:"Home", text:" Home", value:"🏠 Home"},
    {key:"Work", text:" Work", value:"📝 Work"},
    {key:"sports", text:" Sport", value:"🏃 sport"},
    {key:"others", text:" others", value:" 💡 others"},

]


export default function InputTasks(props){

    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: "",
        
    })

    const [error, setError]= useState(false)

    const [error2, setError2] = useState(false)

    const{createTask}=props;


    const onChangeTask = (e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }
    const onChangeCategoryTask = (e, data)=>{
        setTask({
            ...task,
            [data.name]: data.value,
        });
    };

    const onSubmitTask = (e) =>{
        
        //quie no recargue la pagina
        e.preventDefault();

        //validacion de inputs
        if(task.taskName.trim() === ""){
            setError(true);
            return;
        }
        if(task.categoryTask.trim() === ""){
            setError2(true);
            return;
        }
        

        //eliminar mensaje previo de error
        setError(false);
        setError2(false);

        //asignar un ID
        task.idTask=uuidv4();

        //crear la tarea
        createTask(task);

        //limpiar inputs
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: "",
        });
    }


    return(
        <>
        <Grid centered columns={2}>
            <Input type='text' action>
            <Input size="small" icon="add" placeholder="Type your tasks 📋" iconPosition='left' name='taskName' value={task.taskName} onChange={onChangeTask}/>
            
            
            <Select compact options={options} className="select-from-task" name="categoryTask" placeholder='Category' value={task.categoryTask} onChange={onChangeCategoryTask}/>
            <Button type='submit' color='violet' onClick={onSubmitTask}>Add Task</Button>
            </Input>
        </Grid>
        {error && (
            <Grid centered>
                <Header as ="h4" color="red" className='alert-error-form'>
                    <Icon name="close"/>
                    <Header.Content>Task is mandatory</Header.Content>
                    <Icon name="close"/>
                </Header>
            </Grid>
        )}
        {error2 && (
            <Grid centered>
                <Header as ="h4" color="red" className='alert-error-form'>
                    <Icon name="close"/>
                    <Header.Content>Task Category is mandatory</Header.Content>
                    <Icon name="close"/>
                </Header>
            </Grid>
        )}

        </>
    )
};