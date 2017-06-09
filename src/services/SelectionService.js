class SelectionService {

  getLandsForSeason (fromMonth, toMonth, lands) {
    return lands.filter((land) => {
      return Array.isArray(land.seasons) && land.seasons.some((season) => {
        return this.isInSeason(fromMonth, toMonth, season)
      })
    })
  }

  getLandsForSeasonOldSchool (fromMonth, toMonth, lands) {
    var selected = []
    for (const land of lands) {
      if (Array.isArray(land.seasons)) {
        for (const season of land.seasons) {
          if (this.isInSeason(fromMonth, toMonth, season)) {
            selected.push(land)
            break
          }
        }
      }
    }
    return selected
  }

  isInSeason (fromMonth, toMonth, season) {
    return (
      fromMonth <= season.from && toMonth > season.from ||
      fromMonth <= season.to && toMonth >= season.to
    ) && fromMonth !== toMonth
  }

}

export default new SelectionService()
