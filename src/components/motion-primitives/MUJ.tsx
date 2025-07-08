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
        className='border border-gray-200/60 bg-[#FAF5EF]'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src='/assets/manipal.webp'
            alt='What I Talk About When I Talk About Running - book cover'
            className='h-8 w-8 object-cover object-top'
            style={{ borderRadius: '4px' }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
              B.Tech Computer Science Engineering (AIML)
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-900 sm:text-xs'>
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
                    Currently blazing through my junior year at Manipal University Jaipur with a 9.20 GPA that honestly still feels surreal every time I look at it. Landing on the Dean's List three consecutive times wasn't just luck—it was the result of countless 3 AM study sessions, relentless problem-solving marathons, and an almost unhealthy obsession with understanding concepts from their very core rather than just memorizing formulas like a robot. Every semester has been a new battlefield where I've pushed my limits so hard that I've surprised myself with what I'm capable of achieving. The numbers are great, sure, but what really drives me is this insatiable hunger to see how much further I can stretch my mind, how many more impossibilities I can turn into achievements. Some people think I'm crazy for spending entire weekends diving deep into algorithm complexities or database optimization techniques, but when you're genuinely passionate about learning, the line between work and play just disappears. The Dean's List recognitions are incredible milestones, but they're also just stepping stones to something even bigger that I can't quite see yet—and that uncertainty is absolutely thrilling.
                  </p>
                  <br></br>
                  <p>
                    Beyond academics, I've been fortunate enough to dive headfirst into leadership roles and real-world experiences that have completely transformed my perspective on what education really means. As a Student Placement Coordinator, I'm constantly working to bridge the gap between students and their dream careers, spending hours understanding industry demands, crafting strategies to help my peers land incredible opportunities, and honestly, learning more about human psychology and motivation than any textbook could ever teach. My role in the logistics team at Cosmos, our astronomy club, has been absolutely mind-blowing—organizing stargazing events, coordinating with observatories, and realizing that the universe is vast, but so is human potential when we work together toward something meaningful. Writing content for the Atal Incubation Center has been a complete game-changer, sharpening my ability to communicate complex technical ideas in ways that actually make sense to people, and discovering that I have this weird talent for breaking down intimidating concepts into digestible pieces. The internships? They've been absolutely transformative experiences—each one revealing new layers of what I'm capable of and, more importantly, what I still need to master. The classroom teaches you theory and gives you a foundation, but the real world? That's where you learn to adapt under pressure, improvise solutions on the fly, think on your feet, and evolve faster than you ever thought possible.
                  </p>
                  <br></br>
                  <p>
                    The certifications tell their own incredible story of restless curiosity and an almost compulsive need to prove to myself that I can master anything I set my mind to. Oracle SQL certification for DBMS wasn't just about learning database queries—it was about understanding how massive systems store, retrieve, and manipulate data at lightning speed, and how a single optimized query can make the difference between a system that crawls and one that flies. The OOP Python certification from Cisco opened up entire new worlds of thinking about code architecture, design patterns, and elegant solutions that are both powerful and maintainable. DSA from CodeChef was pure mental gymnastics—thousands of problems, countless hours of debugging, and that incredible rush when you finally crack a problem that seemed impossible just hours before. The Design and Analysis of Algorithms certification from IIT Madras through NPTEL was absolutely brutal in the best way possible—diving deep into computational complexity, understanding why certain algorithms work and others fail spectacularly, and developing this almost intuitive sense for elegant solutions. Linux from Red Hat for Operating Systems was like learning to speak directly to machines, understanding how hardware and software dance together, and gaining the power to make computers do exactly what you want them to do. Each certificate represents not just knowledge gained, but entire nights spent debugging mysterious errors, problem sets that initially seemed like they were written in ancient hieroglyphics, and that absolutely incredible moment when complex concepts finally click into place and suddenly everything makes perfect sense. These aren't just credentials on a resume—they're battle scars from intellectual wars I've fought and won, proof that I'm willing to go the extra mile, dig deeper, stay up later, and never, ever settle for surface-level understanding. The more I learn, the more I realize how much more there is to discover, and honestly? That's the most exciting, terrifying, and absolutely thrilling part of this entire journey.
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