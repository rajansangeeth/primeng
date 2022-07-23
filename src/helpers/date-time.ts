export class ConvertDateTime {

  static LocalTime (dateObj: any) {
    let fullDate = new Date(dateObj);
    let year = String(fullDate.getFullYear());
    let month = (fullDate.getMonth() + 1) < 10 ? '0' + String(fullDate.getMonth() + 1) : String(fullDate.getMonth() + 1);
    let date = fullDate.getDate() < 10 ? '0' + String(fullDate.getDate()) : String(fullDate.getDate());

    return `${year}-${month}-${date}`
  }

  
}