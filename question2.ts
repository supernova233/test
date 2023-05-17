
function getClockAngle(hh_mm: string):number {

    const input: string[] = hh_mm.split(":");
    const hh = Number(input[0]) % 12 || 12;
    const mm = Number(input[1]) || 60;
    const angle: number = Math.abs((hh * 5) - mm) * 6;
    return angle;
    
}
