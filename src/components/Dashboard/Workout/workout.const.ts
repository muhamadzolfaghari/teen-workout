import IWorkout from '../../../interface/IWorkout';
import reverseDumbbellFlyImage from '../../../images/workouts/reverse-dumbbell-fly.png';
import stretchImage from '../../../images/workouts/stretch.png';
import squatsImage from '../../../images/workouts/squats.png';
import lungesImage from '../../../images/workouts/lunges.png';
import mountainClimberImage from '../../../images/workouts/mountain-climber.jpg';

export const WORKOUTS: IWorkout[] = [
  {
    id: 1,
    image: reverseDumbbellFlyImage,
    title: 'Reverse Dumbbell Fly',
    length: 'x 12',
    description:
      'Grab a pair of dumbbells and bend forward at your hips until your torso is nearly parallel to the floor. Set your feet shoulder-width apart. Let the dumbbells hang straight down from your shoulders, your palms facing each other, with your arms slightly bent.',
  },
  {
    id: 2,
    image: stretchImage,
    title: 'Stretch',
    length: '00:12',
    description:
      'Stand tall with your feet together and reach both arms overhead with palms together. Inhale and bend laterally to the left side.',
  },
  {
    id: 3,
    image: squatsImage,
    title: 'Squats',
    length: 'x 8',
    description:
      'Stand with feet much wider than a regular air squat with toes turned slightly out, clasp hands at chest for balance. Send hips back and bend at knees to lower down as far as possible with chest lifted. You may find that you can lower very low with feet wider. Press through heels to stand back up to starting position.',
  },
  {
    id: 4,
    image: lungesImage,
    title: 'Lunges',
    length: 'x 12',
    description:
      "Start by standing up tall. Step forward with one foot until your leg reaches a 90-degree angle. ...Lift your front lunging leg to return to the starting position.Repeat 10 to 12 reps on one leg, or switch off between legs until you've totaled 10 to 12 reps per leg.",
  },
  {
    id: 5,
    image: mountainClimberImage,
    title: 'Mountain Climber',
    length: 'x 20',
    description:
      'Start in a press-up position with your hands shoulder-width apart directly beneath your shoulders.As quickly as you can, pull your right knee towards your chest without letting it touch the floor then return to the start position. Repeat step 2 with your left leg.\n' +
      'Continue until you have completed the required amount of reps.',
  },
];
