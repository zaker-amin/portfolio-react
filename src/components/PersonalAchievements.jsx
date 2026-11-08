import React from "react"

const PersonalAchievements = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="my-20 text-center text-5xl">
        Personal
        <span className="text-purple-600"> Achievements</span>
      </h1>

      <div className="flex flex-col max-w-3xl mx-auto text-lg space-y-6">
        <div>
          <p className="font-semibold text-purple-600">Academic Excellence:</p>
          <p>
            Graduated from Ankara University in Computer Engineering with a
            3.83 GPA
          </p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Scholarships:</p>
          <p>
            YTB Merit Scholarship – Master’s in Computer Engineering at Yıldız
            Technical University
            <br />
            YTB Undergraduate Scholarship – Bachelor’s in Computer Engineering
            at Ankara University
            <br />
            Private High School Scholarship
          </p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Languages:</p>
          <p>
            English and Turkish (native level), Persian and Turkmen (native),
            Uzbek, Pashto
          </p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Entrepreneurship:</p>
          <p>Launched my first business at 16: a local supermarket</p>
          <hr className="my-4 border-neutral-900" />
        </div>

        <div>
          <p className="font-semibold text-purple-600">Volunteer Work:</p>
          <p>5 months teaching English and Python</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalAchievements
