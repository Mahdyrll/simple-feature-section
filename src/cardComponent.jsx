import first from '../public/resources/photo_2.png'
import second from '../public/resources/photo_1.png'
import third from '../public/resources/photo_3.png'

const Card = ({ Emoji, EmojiBg, Title, desc, Image }) => {
    return (
        <div className='bg-[#262e3d] w-fit mr-auto ml-auto rounded-2xl p-6 mt-12 sm:w-[316px]'>
            <div>
                <p className={`${EmojiBg} w-fit rounded-full py-2 px-3 text-2xl`}>{Emoji}</p>
            </div>
            <p className='text-white font-semibold text-[1.25rem] leading-7 mt-4'>{Title}</p>
            <p className='font-regular text-base text-white opacity-75 pr-10 mt-3 leading-5'>{desc}</p>
            <img src={Image} alt="asdflk" className='mt-4 rounded-xl'/>
        </div>
    );
};

export default function CardComponent() {
    return (
        <div className='mt-5 px-[4rem] mobile:px-40 px-6 sm:flex sm:mt-0'>
            <Card
                Emoji="✋"
                EmojiBg="bg-[#FCEED8]"
                Title="Collect Feedback at Multiple Touchpoints"
                desc="Provide a comprehensive understanding of the customer experience."
                Image={first}
            />
            <Card
                Emoji="🥅"
                EmojiBg="bg-[#DEE9FC]"
                Title="Ask Targeted and Specific Questions"
                desc="Avoid vague or open-ended questions that may not yield actionable insights."
                Image={second}
            />
            <Card
                Emoji="💬"
                EmojiBg="bg-[#FBE5E6]"
                Title="Prioritize and Respond to Feedback"
                desc="Communicate the changes or improvements you've made in response to their feedback."
                Image={third}
            />
        </div>
    )
}