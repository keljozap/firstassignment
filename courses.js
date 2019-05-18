
const courses=[{
	id:001,
	name:'Quantum Physics',
	duration:'3 months',
	price:'20 dollars'
},
{
	id:002,
	name:'Telecommunication Networks',
	duration:'2 months',
	price:'25 dollars'
},
{
	id:003,
	name:'Advanced English',
	duration:'3 months',
	price:'30 dollars'
},
{
	id:004,
	name:'Electric Machines',
	duration:'3 months',
	price:'20 dollars'
},
{
	id:005,
	name:'Advanced Programming',
	duration:'3 months',
	price:'50 dollars'
}];

const options={

    id:{
        demand:true,
        alias: 'i'
    },
    name:{
        demand:true,
        alias: 'n'
    },
    userID:{
        demand:true,
        alias: 'u'
    }
}

module.exports={
    courses,
    options
};