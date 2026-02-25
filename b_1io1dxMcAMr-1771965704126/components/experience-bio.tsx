"use client"

import { useEffect, useState } from "react"

const CAREER_START_YEAR = 2008
const CAREER_START_MONTH_INDEX = 5
const CAREER_START_DAY = 1

function getYearsInIndustry(now: Date): number {
  let years = now.getFullYear() - CAREER_START_YEAR
  const hasReachedAnniversary =
    now.getMonth() > CAREER_START_MONTH_INDEX ||
    (now.getMonth() === CAREER_START_MONTH_INDEX && now.getDate() >= CAREER_START_DAY)

  if (!hasReachedAnniversary) {
    years -= 1
  }

  return Math.max(years, 0)
}

export function ExperienceBio() {
  const [years, setYears] = useState(17)

  useEffect(() => {
    setYears(getYearsInIndustry(new Date()))
  }, [])

  return (
    <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
      {years}+ years shaping games across console, mobile F2P, PC, and VR, from core and casual experiences
      to applied gamification.
    </p>
  )
}
