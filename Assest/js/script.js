// function hello(){
//     alert("button is clicked");
// }

function Student(name,school,city,subject,mark,grad){
 
    this.name=name;
    this.school=school;
    this.city=city;
    this.subject=subject;
    this.mark=mark;
    this.grad=grad;
}

let data=[
    new Student('bhavin parmar','Deepak high school','Amreli','English','98%','A+'),
    new Student('umang gangera','forword high school','vadodara','math','90%','A'),
]
data.forEach((val)=>{
    console.log(val.name,val.school,val.city,val.subject,val.mark,val.grad);
})