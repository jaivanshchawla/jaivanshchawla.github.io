import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from './morphing-dialog';
import { ScrollArea } from '../../website/ScrollArea';

export function Manipal() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{ borderRadius: '4px' }}
        className='border border-gray-200/60 bg-white'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
            alt='What I Talk About When I Talk About Running - book cover'
            className='h-8 w-8 object-cover object-top'
            style={{ borderRadius: '4px' }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
              B.Tech Computer Science Engineering (AIML)
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              Manipal University Jaipur (2023-2027)
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '12px' }}
          className='relative h-auto w-[500px] border border-gray-100 bg-white'
        >
          <ScrollArea className='h-[90vh]' type='scroll'>
            <div className='relative p-6'>
              <div className='flex justify-center py-10'>
                <MorphingDialogImage
                  src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
                  alt='What I Talk About When I Talk About Running - book cover'
                  className='h-auto w-[200px]'
                />
              </div>
              <div>
                <MorphingDialogTitle className='text-black'>
                  B.Tech Computer Science Engineering (AIML)
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  Manipal University Jaipur (2023-2027)
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700'>
                  <p>
                    Currently blazing through my junior year at Manipal University Jaipur with a 9.20 GPA that honestly still feels surreal. Landing on the Dean's List three times in a row wasn't just luck—it was the result of countless late nights, relentless problem-solving, and an obsession with understanding concepts rather than just memorizing them. Every semester has been a new challenge to push my limits, and somehow, I keep finding that extra gear when things get tough. The numbers are great, but what really drives me is that hunger to see how much further I can go.
                  </p>
                  <p>
                    Beyond academics, I've been fortunate to dive headfirst into leadership and real-world experience. As a Student Placement Coordinator, I'm constantly working to bridge the gap between students and their dream careers, while my role in the logistics team at Cosmos (our astronomy club) has taught me that the universe is vast, but so is human potential when we work together. Writing content for the Atal Incubation Center has sharpened my ability to communicate complex ideas simply, and my internships have been game-changers—each one revealing new layers of what I'm capable of and what I still need to master. The classroom teaches you theory, but the real world? That's where you learn to adapt, improvise, and evolve.
                  </p>
                  <p>
                    The certifications tell their own story of restless curiosity: Oracle SQL for DBMS, OOP Python from Cisco, DSA from CodeChef, Design and Analysis of Algorithms from IIT Madras through NPTEL, and Linux from Red Hat for Operating Systems. Each certificate represents not just knowledge gained, but late nights spent debugging, problem sets that initially seemed impossible, and that incredible moment when complex concepts finally click into place. These aren't just credentials on a resume—they're proof that I'm willing to go the extra mile, dig deeper, and never settle for surface-level understanding. The more I learn, the more I realize how much more there is to discover, and honestly? That's the most exciting part of this entire journey.
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}