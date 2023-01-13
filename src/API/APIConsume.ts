export default class APIConsume {
   protected city
   public data = null

   constructor (city : string) {
      this.city = city
   }

   consumeAPI() {
      let url = 'https://api.openweathermap.org/data/2.5/weather?' +
      'q=' + this.getCity + '&' +
      'units=metric' + '&' +
      'appid=f7a789f4778e31cd5ab2e2754b0d7406'
      fetch(url)
      .then((response) => response.json())
      .then((data) => this.setData = data)
   }

   set setData(data : any) {
      this.data = data
   }

   get getData() {
      return this.data
   }

   get getCity() : string {
      return this.city
   }
}