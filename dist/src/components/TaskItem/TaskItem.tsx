import React, { ReactElement, useState } from 'react'
import './TaskItem.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

interface Props {
    task: string;
    pinned: boolean;
    archived: boolean;
}

const TaskItem: React.FC<Props> = ({task, pinned, archived}: Props): ReactElement => {
    const [checked, setChecked] = useState(archived);
    const [pin, setPinned] = useState(pinned);
    return (
        <div className="task_outer">
            <div className="task_item_box">
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        name="archive"
                        color="secondary"
                    />
                    }
                    label=""
                />
                <div className="task_title">{task}</div>
                <FormControlLabel
                    control={<Checkbox icon={<StarBorderRoundedIcon />} checked={pin} onChange={() => setPinned(!pin)} checkedIcon={<StarRoundedIcon />} name="pinned" />}
                    label=""
                />
            </div>
        </div>
    )
}

export default TaskItem
