namespace Lesson01{
    export class ApplicationController {
        public name = 'World';
        public shoppingCart: string[] = [
            'Cat Food',
            'Milk',
            'Laundry Detergent',
            'Noodels',
            'Chicken Breast'
        ];
         public cars : Models.Car[] = [
                { year: 1989, make: "VW", model: "Fox" },
                { year: 1988, make: "Nissan", model: "Sentra" },
                { year: 1996, make: "Ford", model: "Explorer" },
                { year: 2009, make: "BMW", model: "i325" },
                { year: 2016, make: "Tesla", model: "Model S" },
            ];
        public colors:string[] = [
            'Red',
            'Blue',
            'Green'
        ];

        private color:string;
        public get(){
           return this.color;
        }
        constructor(
            
        ){
           this.color = '';
        }
        public chooseColor(color:string): void{
            this.color = color;
        }
    }
} 