import { Component } from '@angular/core';


interface IBook{
  "id":number,
  "bookName":string,
  "subject":string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timetable';
  books:Array<IBook> = [];
  days:any;
  times:any;
  subject:any;
  allDays:any;
  periods:any;
  todayDay:any;
/*
  time
1 12.40 to 1.00
2 1:00 to 1.35
3 1.35pm 2.10pm
4 2.10pm to 2:45
5 02.45 pm to 03.20 pm

break

6 3.35pm to 4.10 pm 
7 04.10 to 4.45pm
8 4.45 to 5.20
9 5.20 to 6.00pm

  this.days = [
 Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  ] 

*/
ngOnInit(){
  this.todayDay = new Date();
  this.todayDay = this.todayDay.getDay() - 1;
  this.periods = [1,2,3,/* 4,5,6 */];

  this.days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
     ];

  this.allDays = 
    [
     { "period": [
        {
          "subject": "english",
          "books": [
            1,2
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    },
     {"period": [
        {
          "subject": "english",
          "books": [
            1
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    } ,
    { "period": [
        {
          "subject": "english",
          "books": [
            1
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    } ,
    {  "period": [
        {
          "subject": "english",
          "books": [
            1
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    },
     {"period": [
        {
          "subject": "english",
          "books": [
            1
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    } ,
     { "period": [
        {
          "subject": "english",
          "books": [
            1
          ]
        },
        {
          "subject": "hindi",
          "books": [
            5
          ]
        }
        ,
        {
          "subject": "marathi",
          "books": [
            8
          ]
        }
      ]
    },
    ];


  this.subject = [
    "English", // when , where , which books
    "Hindi",
    "Marathi",
    "Maths",
    "Science",
    "S.St.",
    "Computer",
    "G.K.",
    "V.E.",
    "Art",
    "AI",
    "P.T.",
    "Music",
    "Library",
    "Test"
  ];
  this.books = 
    [
      {
        "id":1,
        "bookName":"Treasures of English Textbook",
        "subject":"english"
      },
      {
         "id":2,
        "bookName":"Advanced English Grammer Textbook",
        "subject":"english"
      },
      {
         "id":3,
        "bookName":"Tenali Raman Book",
        "subject":"english"
      },
      {
         "id":4,
        "bookName":"Cursive Writing book",
        "subject":"english"
      },
      
      {   
         "id":5, 
        "bookName": "Prathibha Textbook",
        "subject":"hindi"
      },
      {    
         "id":6,
        "bookName":"Vyakaran Textbook",
        "subject":"hindi"
      },
      {   
         "id":7, 
        "bookName": "Sulekh Book",
        "subject":"hindi"
      },
      {   
         "id":8, 
        "bookName":"Marathi Sulabh Bharati Textbook",
        "subject":"marathi"
      },
      {    
         "id":9,
        "bookName":"Lekhan Pan Book",
        "subject":"marathi"
      },
      {   
         "id":10, 
        "bookName":"Step By Step Mathematics",
        "subject":"maths"
      },
      {   
         "id":11, 
        "bookName":"Mastering Science",
        "subject":"Science"
      },
      {   
         "id":12, 
        "bookName":"My Wonderful Book of Social Studies Textbook",
        "subject":"SocialStudies"
      },
      {  
         "id":13,  
        "bookName":"Integrated Complluter Textbook",
        "subject":"Computer"
      },
      {  
         "id":14,  
        "bookName":"Brain Booster Plus",
        "subject":"G.K."
      },
      { 
         "id":15,   
        "bookName":"inspiring Souls Textbook",
        "subject":"v.E."
      },

      {
         "id":16,
        "bookName":"Prachi Visual Art Book", 
        "subject":"Art"
      },
      {   
         "id":17, 
        "bookName":"plain Drawing Book",
        "subject":"Art"
      },
      {   
         "id":18, 
        "bookName":"AI Lab textbook",
        "subject":"AI"
      }

    ];

    
  this.allDays.forEach((element: any) => {
    element.period.forEach((item: any) => {
      const booksReset = item.books.map((bookID: any) => {
        const bookDetails = this.books.find((book) => { return book.id == bookID });
        return bookDetails?.bookName;
      });
      item.books = booksReset;
    });
  });
this.allDays = this.allDays;

}



}
