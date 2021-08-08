import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Modal } from 'react-bootstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { Input } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import EditIcon from '@material-ui/icons/Edit';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Draggable from 'react-draggable';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 330,
    minHeight:24
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
  table: {
    minWidth: 650,
  },
}));
function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
export default function Education() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let [Educations, setEducation] = useState([
    {id:1,Education:"12th",Course:"MPC",Specialization:"Maths",
    Institution:"Sri Chaitanya",university:"jntu",PassingYear:2018,Percentage:"70"},
    {id:2,Education:"Undergraduate",Course:"EEE",Specialization:"Physics",
    Institution:"Ragiv Gandhi",university:"Delhi",PassingYear:2019,Percentage:"90"},
    {id:3,Education:"PostGraduation",Course:"ECE",Specialization:"AI",
    Institution:"TestYantra",university:"Mumbai",PassingYear:2020,Percentage:"76"},
    {id:4,Education:"Degree",Course:"CSE",Specialization:"Java",
    Institution:"TechnoElevate",university:"Chennai",PassingYear:2009,Percentage:"66"}
])
let [show, setShow] = useState(false)
let [hidden, sethidden] = useState(false)
let [id, setid] = useState("")
let [education, seteducation] = useState("")
let [course, setcourse] = useState("")
let [specialization, setspecialization] = useState("")
let [institution, setinstitution] = useState("")
let [university, setuniversity] = useState("")
let [passsingyear, setpasssingyear] = useState("")
let [percentage, setpercentage] = useState("")
let [open, setOpen] = React.useState(false);
let [yes, setyes] = useState(false);

  const handleClickOpen = (id) => {
    setid(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  function remove(id){
    const result=Educations.filter((e)=>e.id!==id)
    setEducation(result)
 }
 const handleyes=()=>{
  setyes(true)
  
    remove(id)
     setyes(false)
}
const update=(data,i)=>{
    setShow(true)
   course=data.Course
   setcourse(course)
   id=data.id
   setid(id)
   education=data.Education
   seteducation(education)
   specialization=data.Specialization
   setspecialization(specialization)
   institution=data.Institution
   setinstitution(institution)
   university=data.university
   setuniversity(university)
   passsingyear=data.PassingYear
   setpasssingyear(passsingyear)
   percentage=data.Percentage
   setpercentage(percentage)
}
function updated(){
  sethidden(false)
  let result=Educations.find((e)=>e.id===id) 
  result.Education=education
  result.Course=course
  result.Specialization=specialization
  result.Institution=institution
  result.university=university
  result.PassingYear=passsingyear
  result.Percentage=percentage

  setEducation(Educations)
  course=""
  setcourse(course)
  id=""
  setid(id)
  education=""
  seteducation(education)
  specialization=""
  setspecialization(specialization)
  institution=""
  setinstitution(institution)
  university=""
  setuniversity(university)
  passsingyear=""
  setpasssingyear(passsingyear)
  percentage=""
  setpercentage(percentage)
    setShow(false)
   }
   const adding=()=>{
    setShow(true)
    
  setEducation(Educations)
  course=""
  setcourse(course)
  id=""
  setid(id)
  education=""
  seteducation(education)
  specialization=""
  setspecialization(specialization)
  institution=""
  setinstitution(institution)
  university=""
  setuniversity(university)
  passsingyear=""
  setpasssingyear(passsingyear)
  percentage=""
  setpercentage(percentage)
    sethidden(true)
   }
const handleData=(e)=>{
    e.preventDefault()
    const data={
        id:Educations.length+1,Education:education,Course:course,Specialization:specialization,
        Institution:institution,university:university,PassingYear:passsingyear,Percentage:percentage,
    }
    setEducation(Educations.concat(data))
    setShow(false)
    sethidden(false)
}
  return (
    <div class="Container">
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SNO</TableCell>
            <TableCell>Education</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Specialization</TableCell>
            <TableCell align="right">Institute</TableCell>
            <TableCell align="right">University</TableCell>
            <TableCell align="right">PassingYear</TableCell>
            <TableCell align="right">Percentage</TableCell>
            <TableCell align="right" onClick={adding}><AddCircleIcon style={{width:"28px",height:"28px"}}/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Educations.map((ele,i) => (
            <TableRow key={ele.Course}>

              <TableCell align="right">
                {ele.id}
              </TableCell>
              <TableCell align="right">{ele.Education}</TableCell>
              <TableCell align="right">{ele.Course}</TableCell>
              <TableCell align="right">{ele.Specialization}</TableCell>
              <TableCell align="right">{ele.Institution}</TableCell>
              <TableCell align="right">{ele.university}</TableCell>
              <TableCell align="right">{ele.PassingYear}</TableCell>
              <TableCell align="right">{ele.Percentage}</TableCell>
              <TableCell align="right" onClick={()=>update(ele,i)}><EditIcon style={{color:"blue"}}/> </TableCell>     
              <TableCell align="right" onClick={() => { (yes)? remove(ele.id):handleClickOpen(ele.id)}}><DeleteIcon style={{color:"red"}}/> </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal show={show}>
  <Modal.Header onClick={()=>{setShow(false)}} closeButton>
    <Modal.Title>EDUCATIONAL</Modal.Title>
    
  </Modal.Header>

  <Modal.Body>
    <form>
    <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Course</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>select your course</em>
          </MenuItem>
          <MenuItem value={10}>Undergraduate</MenuItem>
          <MenuItem value={20}>Postgraduate</MenuItem>
        </Select>
      </FormControl>
     <div style={{display:"flex"}}>
     <div>
       <p>Educaion</p>
        <Input type="text" value={education} onChange={(e)=>seteducation(e.target.value)}/>
        <p>Course</p>
        <Input type="text" value={course} onChange={(e)=>setcourse(e.target.value)}/>
        <p>Specialization</p>
        <Input type="text" value={specialization} onChange={(e)=>setspecialization(e.target.value)}/>
       </div>
       <div style={{marginLeft:"10px"}}>
       <p>Institute</p>
        <Input type="text" value={institution} onChange={(e)=>setinstitution(e.target.value)}/>
        <p>University</p>
        <Input type="text" value={university} onChange={(e)=>setuniversity(e.target.value)}/>
        <p>PassingYear</p>
        <Input type="text" value={passsingyear } onChange={(e)=>setpasssingyear(e.target.value)}/>
        <p>Percentage</p>
        <Input type="text" value={percentage} onChange={(e)=>setpercentage(e.target.value)}/>
        
       </div>
        
     </div>

    </form>
  </Modal.Body>

  <Modal.Footer>
  <span>
      {hidden ? <Button variant="primary" onClick={handleData}>ADD </Button> : 
       <Button variant="success" onClick={updated}>Update </Button>}
    </span>
  </Modal.Footer>
</Modal>
<div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Are you sure you want to delete ?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            NO
          </Button>
          <Button onClick={()=>{handleyes();handleClose();}} color="primary">
            Yes
          </Button>
        </DialogActions>

      </Dialog>
    </div>
    </div>
    
  );
}
