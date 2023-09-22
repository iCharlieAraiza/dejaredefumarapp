export const calculateLevel = (days: number) => {
  if(days > 1000) {
    return '🏆'
  }
  
  let goal = 0

  if(days < 7) {
    goal = 7
  } else if(days >= 7 && days < 14) {
    goal = 14
  } else if(days >= 14 && days < 30) {
    goal = 30
  } else if(days >= 30 && days < 60) {
    goal = 60
  } else if(days >= 60 && days < 90) {
    goal = 90
  } else if(days >= 90 && days < 120) {
    goal = 120
  } else if(days >= 120 && days < 365) {
    goal = 365
  } else if(days >= 365) {
    goal = 1000
  }

  return `${days}/${goal} días`
}