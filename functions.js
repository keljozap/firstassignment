
const {courses,options}=require('./courses.js');
const argv= require('yargs')
            .command('registration', 'registrationList', options)
            .argv;

let allCourses=(array, callback)=>{
  for (var index = 0; index < array.length; index++) {
  	let{id,name,duration,price}=array[index]
    setTimeout(function(){
           console.log('The course: '+name+' have the id: '+id+' and it longs: '+duration+' and it have a price of: '+price);
        },2000*(index+1))
  }
}

let fs= require('fs');

let registrationList=(file)=>{
    let registrationCourse = courses.find(function(courseID){
        return courseID.id==file.id
    })
    if(registrationCourse==null){
        console.log('The option than you enter is not a valid option, please choose some o these options courses:')
        allCourses(courses);
        return false;
    }
     out='The student ' + file.n + ' with the ID ' + file.id + ' ,' + ' has been registered on the course '+ registrationCourse.name+'\n'+
    ' it has a duration of '+ registrationCourse.duration+' with a price of '+registrationCourse.price
    console.log('The course '+ registrationCourse.name+'\n'+
    ' it has a duration of '+ registrationCourse.duration+' with a price of '+registrationCourse.price);

    fs.writeFile('registrationList.txt',out,(err)=>{
        if(err)throw (err);
        console.log('Congrats!, youre registration is done')
    })
}

if(argv._[0]=='registration'){
    registrationList(argv);
}else if(argv._[0]=='courses'){
    allCourses(courses);
}else{
	allCourses(courses);
}

