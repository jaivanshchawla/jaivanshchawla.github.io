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

export function Presidium() {
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
        className='border border-gray-200/60 bg-[#F7EFEF]'
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
              School Education
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-800 sm:text-xs'>
              Presidium School, Gurgaon (2010-2023)
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '12px' }}
          className='relative h-auto w-[500px] border border-gray-100 bg-[#F3E6E6]'
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
                  School Education
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-700'>
                  Presidium School, Gurgaon (2010-2023)
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-900'>
                  <p>
                    Presidium wasn't just my educational institution from 2010 to 2023—it was the forge where my relentless drive for excellence was first ignited and hammered into the weapon of determination I wield today. Thirteen years at a single school meant I wasn't just passing through; I was building something monumental, creating a legacy that would echo through those halls long after I graduated. When the CBSE 10th grade boards arrived, I didn't just meet expectations—I obliterated them with a stunning 94.6%, a score that represented countless hours of disciplined study, strategic preparation, and an almost obsessive attention to detail that had teachers wondering if I was some kind of academic machine. The transition to 11th and 12th grade with PCM (Physics, Chemistry, Mathematics) was like stepping into a completely different universe of complexity, where every concept demanded not just understanding but mastery, and every problem required a level of analytical thinking that pushed my brain to its absolute limits. Then came the ultimate test of adaptability and resilience—the COVID-19 lockdown that turned my 10th and 11th grade experience into a completely digital battlefield. While many students struggled with online learning, I saw it as an opportunity to prove that excellence isn't location-dependent; it's mindset-dependent. Navigating through virtual classrooms, managing technical glitches, maintaining focus during endless Zoom sessions, and somehow managing to not just survive but thrive in an environment that destroyed many students' academic trajectories—that was where my mental fortitude was truly tested and proven. The 80.6% in 12th grade boards wasn't just a percentage; it was a testament to my ability to adapt, evolve, and maintain high standards even when the entire world was falling apart around me. These scores weren't just numbers on a report card—they were proof that I could perform under any circumstances, adapt to any challenge, and emerge victorious from any academic battlefield thrown my way.
                  </p>
                  <br></br>
                  <p>
                    The true measure of character isn't just what you achieve for yourself, but what you accomplish for others, and my journey at Presidium was absolutely defined by moments where I chose to lift others up even when it meant sacrificing my own comfort and time. Being a scribe writer for special needs students during their crucial board examinations wasn't just a responsibility—it was a calling that revealed depths of empathy, patience, and dedication I didn't even know I possessed. In 9th grade, while I was simultaneously preparing for my own exams and managing to score an impressive 92%, I was also serving as the hands and voice for a special needs child taking their 10th grade boards, spending hours understanding their thought processes, learning to translate their ideas into perfect written form, and carrying the enormous responsibility of ensuring their academic dreams weren't derailed by physical limitations. The incredible pressure of knowing that someone else's entire future depended on my accuracy, my focus, and my ability to channel their knowledge through my writing—it was both terrifying and absolutely exhilarating. When that student passed with good marks, the victory felt more meaningful than any personal achievement I had ever accomplished. But that was just the beginning. In 8th grade, I took on an even more challenging role as a scribe for a 10th grader during their CBSE boards, and when she scored a perfect 100 in social studies, I realized that my ability to serve others could create moments of absolute perfection and triumph that rippled far beyond my own life. The Leaders Club wasn't just another extracurricular activity—it was where I discovered that leadership isn't about commanding others, but about inspiring them to achieve things they never thought possible. Serving three times on the student council as president, vice president, and prefect wasn't just about titles; it was about learning to balance competing interests, mediate conflicts, inspire team unity, and create solutions that served everyone's best interests. Our hydraulic project in 9th grade wasn't just a science experiment—it was a masterpiece of collaborative engineering, innovative problem-solving, and relentless refinement that earned us the right to compete at levels that most students only dream about. Every debate competition, every leadership initiative, every moment where I chose to step up and take responsibility for outcomes that affected others—these weren't just activities, they were character-building experiences that shaped me into someone who doesn't just succeed individually, but creates success for entire communities.
                  </p>
                  <br></br>
                  <p>
                    The breadth of my achievements at Presidium reads like a catalog of human potential pushed to its absolute limits across every conceivable domain of skill and knowledge. My A1 level certification in German language wasn't just about learning vocabulary and grammar—it was about rewiring my brain to think in completely different linguistic patterns, understanding cultural nuances that most people never encounter, and developing a cognitive flexibility that opened up entire new worlds of communication and understanding. The collection of medals in inline skating spanning from my earliest grades until I made the strategic decision to retire represents years of disciplined training, countless hours perfecting technique, pushing through physical pain and mental barriers, and developing a competitive spirit that refused to accept anything less than excellence. But skating was just one battlefield among many. From my earliest years, I threw myself into every sport with the same relentless intensity—whether it was mastering the precise movements and mental discipline required for taekwondo until I earned my green belt, developing the strategic thinking and teamwork skills needed for cricket in 4th grade, building the endurance and coordination required for football over two intense years, or honing the lightning-fast reflexes and tactical precision needed for table tennis throughout my entire school career. Even chess, with its demands for deep strategic thinking and psychological warfare, became another arena where I tested and developed my intellectual capabilities. The subject excellence awards from 4th grade through 11th grade weren't just recognition—they were proof of a consistency that most students find impossible to maintain, evidence of a work ethic that never wavered regardless of the subject matter, and demonstration of an intellectual curiosity that found ways to excel whether the topic was mathematics, science, literature, or any other academic challenge. The overall excellence award in 6th grade was particularly meaningful because it represented not just academic achievement, but recognition of someone who had managed to excel across every single dimension of school life simultaneously. My six years of dedication to abacus, earning gold medals at every level until I finally decided to move on to new challenges, represented a commitment to mental mathematics and cognitive development that most people abandon after a few months of difficulty. The chairman honors for both skating and abacus weren't just awards—they were recognition of someone who had achieved mastery in completely different domains, someone who could excel whether the challenge was physical, mental, or a combination of both. Every certificate, every medal, every recognition represents not just a moment of achievement, but months or years of preparation, practice, dedication, and an absolute refusal to accept mediocrity in any form. These weren't just extracurricular activities—they were laboratories where I experimented with the limits of human potential, where I discovered that excellence isn't a destination but a way of life, and where I learned that the only real competition is with the person you were yesterday.
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