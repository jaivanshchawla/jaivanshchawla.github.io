import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { ScrollArea } from '../../website/ScrollArea';
import { useRef, useState, useEffect } from 'react';

export function Tibraze() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Use multiple timeouts to ensure scrolling works
      const timeouts = [0, 50, 100, 200, 300].map(delay => 
        setTimeout(() => {
          // Try to find and scroll various possible containers
          const selectors = [
            '[data-radix-scroll-area-viewport]',
            '.h-\\[90vh\\]',
            '[role="region"]',
            '[style*="overflow"]'
          ];
          
          for (const selector of selectors) {
            const element = document.querySelector(selector) as HTMLElement;
            if (element && element.scrollTop !== undefined) {
              element.scrollTop = 0;
            }
          }
          
          // Also ensure our content starts at the top
          if (contentRef.current) {
            const parent = contentRef.current.parentElement;
            if (parent && parent.scrollTop !== undefined) {
              parent.scrollTop = 0;
            }
          }
        }, delay)
      );
      
      return () => timeouts.forEach(clearTimeout);
    }
  }, [isOpen]);

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
      onOpenChange={setIsOpen}
    >
      <MorphingDialogTrigger
        style={{ borderRadius: '12px' }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-black dark:bg-black'
      >
        <MorphingDialogImage
          src='/assets/respro.webp'
          alt='Tibraze picture.'
          className='h-48 w-full object-cover'
        />
        <div className='flex grow flex-row items-end justify-between px-3 py-2'>
          <div>
            <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
              Research Projects
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              A Showcase of Past and Current Work
            </MorphingDialogSubtitle>
          </div>
          <button
            type='button'
            className='
              relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center
              rounded-lg border transition-colors active:scale-[0.98] focus-visible:ring-2
              border-[#7A3B44] bg-[#2B1A24] text-[#7A3B44]
              hover:bg-[#5A3A4B] hover:text-[#D8AFA8]
              dark:border-[#7A3B44] dark:bg-[#2B1A24] dark:text-[#7A3B44] dark:hover:bg-[#5A3A4B] dark:hover:text-[#D8AFA8]'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '24px' }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-neutral-900 sm:w-[500px]'
        >
          <ScrollArea className='h-[90vh]' type='scroll'>
            <div ref={contentRef} style={{ paddingTop: '0px' }}>
            <MorphingDialogImage
              src='/assets/respro.webp'
              alt='Tibraze picture'
              style={{
                width: 'min(360px, 100%)',
                height: 'auto',
                maxHeight: '360px',
                objectFit: 'contain',
                borderRadius: '16px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '8px',
                marginBottom: '16px',
              }}
              className='shadow'
            />
            <div className='p-6 pt-2'>
              <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                The Research Collection
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                Exploring, Experimenting, Evolving
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                {/* Research Project 1 */}
  <p className="mt-4 text-zinc-900 dark:text-zinc-200 font-bold text-base">
    Research Project 1:
  </p>
  <p className="mb-2 text-zinc-900 dark:text-zinc-200 font-semibold">
    Exploring Machine Learning and Artificial Intelligence with a Web-Based Chess Game
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    This project merges the strategic elegance of chess with the computational finesse of artificial intelligence and machine learning, resulting in a dynamic and accessible web-based chess platform. Designed and developed as a user-centric application, the core aim was to democratize access to chess gaming while introducing adaptive AI mechanics that elevate both gameplay quality and user engagement.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    At the heart of the system lies an AI opponent powered by the Minimax algorithm, made computationally more efficient through Alpha-Beta Pruning. This foundational strategy module enables the AI to evaluate a range of board states and make optimal moves with reduced search overhead. However, the standout innovation of this project extends beyond algorithmic movesets—it involves the infusion of a machine learning pipeline that personalizes difficulty in real time.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    By tracking player interactions and scoring each move on a standardized scale from 1 to 10, the application develops a composite player profile. This profile informs a dynamic scaling engine that adapts AI depth and aggressiveness based on the player's evolving skill. The net effect is a self-adjusting challenge curve that keeps gameplay consistently engaging—neither too easy for the experienced, nor discouraging for the novice.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    The team conducted a thorough literature review spanning areas of game development methodologies, accessible design principles, and AI applications in gaming. Building upon this foundation, multiple phases of research were initiated:
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Comparative evaluation of leading chess platforms (Chess.com, Lichess, Playchess) to benchmark features, UI/UX dynamics, and technical stack choices.</li>
      <li>Design and planning, including requirements engineering, identified key functional needs such as rule enforcement, visual clarity, intuitive interaction (via drag-and-drop mechanics), and AI modular scalability.</li>
      <li>Frontend implementation using HTML, CSS, and JavaScript to develop a responsive and interactive chessboard with real-time visual cues and performance feedback.</li>
      <li>Backend design (future scope) involving Node.js and potential Python engines for ML operations, ensuring modular growth.</li>
      <li>Integration of a rating and feedback loop, where player skill metrics refine both difficulty and analytics for self-improvement.</li>
    </ul>
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    Aesthetically, the application features highlighting mechanisms for legal and capturing moves, end-game detection indicators, and intuitive visual cues to reduce cognitive overload and enhance decision-making. Internally, modular JavaScript files handle board logic, rule enforcement, and AI-driven move selection through global control structures.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    Beyond its academic merit, this project embodies a future-ready chess platform that fuses adaptability, accessibility, and intelligent design. It has been structured to support future enhancements such as multiplayer capabilities via WebSockets, comprehensive data storage using MongoDB, and even real-time match analytics.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    This research achieves more than just a playable chess game—it paves the way for intelligent, inclusive gaming experiences that learn and grow with the user.
  </p>
  <a
                  className='mt-2 inline-flex text-zinc-500 underline'
                  href='https://github.com/jaivanshchawla/WebChessEngine'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  web.chess.engine
                </a>

  {/* Research Project 2 */}
  <p className="mt-8 text-zinc-900 dark:text-zinc-200 font-bold text-base">
    Research Project 2:
  </p>
  <p className="mb-2 text-zinc-900 dark:text-zinc-200 font-semibold">
    AI-Based Analysis of Load Distribution Patterns on the Tibial Condyles of the Knee in Normal Humans
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    The second project ventures into the high-impact realm of biomedical AI, focusing on one of the most stress-bearing joints in the human body: the knee. Specifically, this research concentrates on the biomechanics of the tibial condyles—the key load-transmitting surfaces of the knee—and the role of abnormal pressure distribution in contributing to degenerative joint conditions like osteoarthritis.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    The core purpose of the project is to develop an intelligent, sensor-integrated framework capable of capturing real-time load patterns during movement and translating this into actionable diagnostic insights. While current diagnostic tools like MRIs and radiographs provide critical structural snapshots, they fail to capture dynamic joint mechanics. This research addresses that gap through the combined use of wearable sensors and machine learning.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    To establish the foundation, a thorough review of knee anatomy, joint force mechanics, and diagnostic modalities was undertaken. Subsequently, the semester's goals centered on the following milestones:
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Sensor technology selection, focusing on pressure mapping (F-SCAN, piezoresistive), strain gauges for joint deformation monitoring, IMUs for kinematics (angle, speed, direction), and EMG sensors for capturing muscle activation patterns.</li>
      <li>Clinical data acquisition, utilizing validated tools like the WOMAC Index and Visual Analogue Scale (VAS) to establish baseline scores for pain, stiffness, and functionality.</li>
      <li>Feature engineering, mapping clinical observations to biomechanical indicators such as pressure asymmetry, gait irregularities, and localized muscle fatigue or weakness.</li>
    </ul>
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    The anticipated outcomes are not limited to data collection. Instead, the real innovation lies in designing an AI system—currently in blueprint phase—that can fuse multimodal inputs (sensor data + clinical scores) to identify early signs of joint deterioration. Predictive outputs would include abnormal tibial loading markers, gait deviation flags, and stress maps, laying the groundwork for personalized rehabilitation strategies.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    Specific research contributions include:
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>A systematic comparison of over a dozen AI models and diagnostic techniques used in orthopaedics—from CNNs for cartilage segmentation to SVMs for gait classification.</li>
      <li>Evaluation of EMG-based muscle tracking techniques and their real-time integration potential with pressure sensors.</li>
      <li>Development of a modular system architecture that incorporates preprocessing pipelines, supervised learning models (e.g., decision trees, CNNs), and dynamic dashboards for clinician usability.</li>
      <li>Prototyping of a brace-integrated sensor array that captures real-time data during posture transitions, aiming at elderly or mobility-compromised populations.</li>
    </ul>
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    Future plans include the training of machine learning models using the collected biomechanical and clinical data. These models are expected to automate the classification of healthy versus affected knees, predict osteoarthritis onset probability, and supply clinicians with interactive load distribution maps and structured clinical alerts.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    Additionally, generative design methods will be explored to translate AI insights into custom-fitted knee orthotics via CAD modeling and 3D printing.
  </p>
  <p className="text-zinc-500 dark:text-zinc-400">
    This work marks an important step in redefining orthopedic diagnostics, moving from static, symptom-based assessments to dynamic, data-intensive, and predictive healthcare solutions. As the sensor-AI ecosystem matures, this project envisions a future wherein real-time, personalized knee health monitoring becomes not just possible—but standard.
  </p>
  <a
    className="mt-2 inline-flex text-zinc-500 underline"
    href="#"
    target="_blank"
    rel="noopener noreferrer"
  >
    coming soon
  </a>
              </MorphingDialogDescription>
            </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className='text-zinc-50' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}