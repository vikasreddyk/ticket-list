import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import './task-item.component.css';

function TaskList(props) {
    return (<div>
        <Card className="item-card">
            <CardHeader
                avatar={
                    <Avatar alt={props.task.user.login} src={props.task.user['avatar_url']} aria-label={props.task.user.login} >
                    </Avatar>
                }
                title={(<div>
                    <div className="chips-container">
                        {props.task.labels.map((label) => {
                            return (<Chip variant="outlined"
                                size="small"
                                className='label-chip' 
                                key={label.id} 
                                label={label.name}
                                style={{color :`#${label.color}`, borderColor : `#${label.color}`}}
                                 />)
                        })}
                    </div>
                    <div className="card-title">{props.task.title}</div>
                </div>)}
                subheader={`by ${props.task.user.login}`}
            />
        </Card>
    </div>)
}
export default TaskList;