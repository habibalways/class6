// name, role ,age ,class,gender,location, admission fee
const studentsData = [

    ['Habib', 5, 15, 'seven', 'Male', 'Uttora', 2000],
    ['Moir', 7, 20, 'Eight', 'Male', 'Mirpur', 3000],
    ['Hridoy', 5, 16, 'Nine', 'female', 'Badda', 1000],
    ['Nur', 6, 18, 'Ten', 'Male', 'gulsan', 4000],
    ['Jakariya', 5, 14, 'Eight', 'Male', 'Farmgate', 1500],
    ['Rakib', 1, 13, 'seven', 'female', 'Badda', 1300],
    ['Shamim', 3, 19, 'Nine', 'Male', 'Mirpur', 1600],
    ['Faruk', 2, 15, 'seven', 'Male', 'Farmgate', 3000],
    ['Rasel', 3, 16, 'seven', 'female', 'Uttora', 1500],
    ['Robin', 1, 14, 'Eight', 'Male', 'Mirpur', 1600],
    ['Usman', 7, 13, 'Nine', 'Male', 'Uttora', 2000],
    ['Azizul', 6, 11, 'seven', 'female', 'Badda', 1600],
    ['Rabbi', 5, 12, 'Eight', 'Male', 'Uttora', 1500],
    ['Rifat', 4, 19, 'seven', 'female', 'Mirpur', 1500],
    ['Raihan', 7, 18, 'Nine', 'Male', 'Farmgate', 1600],
    ['Josim', 2, 17, 'Eight', 'female', 'Uttora', 3000],
    
];





// Total Admnission fees 


let total_addmision_fee = 0;
studentsData.sort().forEach( ( data , index ) => {
    console.log(`
        ${index + 1}. Name: ${data[0]}- Addmission Fee  : ${data[6]} 
    `);
    total_addmision_fee += +data[6];
} );
console.log(`
------------------------------------------------------------->
Total Admission Fee     => ${total_addmision_fee}
`);
 





// - Find All Female Students

let totalFemStudent = 0 ;

studentsData.sort().map( ( data , i ) => {
    if(data[4] === 'Female'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalFemStudent++
    }
});
console.log(`
------------------------------------------------------------->
Female Students         : ${totalFemStudent}
`);
 





// Find class wise student result

let totalCls9Student = 0 ;
studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Nine'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls9Student++
    }
});
let totalCls7Student = 0 ;
studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Seven'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls7Student++
    }
});
let totalCls10Student = 0 ;
studentsData.sort().map( ( data , i ) => {
    if(data[3] === 'Ten'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    totalCls10Student++
    }
});
console.log(`
------------------------------------------------------------->
Class Nine Students    : ${totalCls9Student}
Class Seven Students     : ${totalCls7Student}
Class Ten Students     : ${totalCls10Student}
----------------------------------------------
Total                   : ${ totalCls9Student + totalCls7Student + totalCls10Student }
`);
 





//  - Location wise student result

studentsData.sort().map( ( data , i ) => {
    if( data[5] === 'Uttora' || data[5] === 'Mirpur' || data[5] === 'Badda' || data[5] === 'Framgate'){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    }
});







//- find student between 10 - 25 age

studentsData.forEach( ( data, i ) => {
    
    if( data[2] >= 10 && data[2] <= 25 ){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    }
} );
