basic.forever(function () {
    if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
})
