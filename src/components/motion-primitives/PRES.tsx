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
              School Education
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              Presidium School, Gurgaon (2010-2023)
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
                  School Education
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  Presidium School, Gurgaon (2010-2023)
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700'>
                  <p>
                    Presidium School Gurgaon wasn't just my educational institution from 2010 to 2023—it was the forge where my relentless drive for excellence was first ignited and hammered into the weapon of determination I wield today. Thirteen years at a single school meant I wasn't just passing through; I was building something monumental, creating a legacy that would echo through those halls long after I graduated. When the CBSE 10th grade boards arrived, I didn't just meet expectations—I obliterated them with a stunning 94.6%, a score that represented countless hours of disciplined study, strategic preparation, and an almost obsessive attention to detail that had teachers wondering if I was some kind of academic machine. The transition to 11th and 12th grade with PCM (Physics, Chemistry, Mathematics) was like stepping into a completely different universe of complexity, where every concept demanded not just understanding but mastery, and every problem required a level of analytical thinking that pushed my brain to its absolute limits. Then came the ultimate test of adaptability and resilience—the COVID-19 lockdown that turned my 10th and 11th grade experience into a completely digital battlefield. While many students struggled with online learning, I saw it as an opportunity to prove that excellence isn't location-dependent; it's mindset-dependent. Navigating through virtual classrooms, managing technical glitches, maintaining focus during endless Zoom sessions, and somehow managing to not just survive but thrive in an environment that destroyed many students' academic trajectories—that was where my mental fortitude was truly tested and proven. The 80.6% in 12th grade boards wasn't just a percentage; it was a testament to my ability to adapt, evolve, and maintain high standards even when the entire world was falling apart around me. These scores weren't just numbers on a report card—they were proof that I could perform under any circumstances, adapt to any challenge, and emerge victorious from any academic battlefield thrown my way.
                  </p>
                  <p>
                    Equal parts training log, travelogue, and reminiscence, this
                    revealing memoir covers his four-month preparation for the
                    2005 New York City Marathon and takes us to places ranging
                    from Tokyo’s Jingu Gaien gardens, where he once shared the
                    course with an Olympian, to the Charles River in Boston
                    among young women who outpace him. Through this marvelous
                    lens of sport emerges a panorama of memories and insights:
                    the eureka moment when he decided to become a writer, his
                    greatest triumphs and disappointments, his passion for
                    vintage LPs, and the experience, after fifty, of seeing his
                    race times improve and then fall back.
                  </p>
                  <p>
                    By turns funny and sobering, playful and philosophical, What
                    I Talk About When I Talk About Running is rich and
                    revelatory, both for fans of this masterful yet guardedly
                    private writer and for the exploding population of athletes
                    who find similar satisfaction in running.
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