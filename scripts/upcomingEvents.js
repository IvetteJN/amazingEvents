//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION
function createCard(arrayEvents){
    let cards=''
    for(const event of arrayEvents){
      if(event.date > data.currentDate){
        cards += getEvent(event);
      }
    }
    return cards
  }
