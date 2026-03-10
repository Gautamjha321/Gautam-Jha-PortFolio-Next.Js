import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    position: "Product Manager @ EduTech Startup",
    text: "Gautam built our employee dashboard in record time using React and Supabase. His attention to clean UI and real-time data made a huge difference. The role-based access system he implemented was flawless.",
    avatar: memojiAvatar1,
  },
  {
    name: "Arjun Mehta",
    position: "Co-founder @ SaaS Ventures",
    text: "Working with Gautam on our AI video platform was exceptional. He integrated Gemini API, Razorpay, and Supabase seamlessly. The product launched on time and performs beautifully.",
    avatar: memojiAvatar2,
  },
  {
    name: "Rahul Verma",
    position: "Lead Developer @ CodeBridge",
    text: "Gautam is a rare talent — he thinks like a product person and codes like an engineer. His LMS project shows real depth: auth, payments, video lessons, all working perfectly together.",
    avatar: memojiAvatar3,
  },
  {
    name: "Sneha Kapoor",
    position: "UI/UX Designer @ PixelCraft",
    text: "Gautam takes designs and brings them to life with precision. He implemented our complex interview prep platform with AI feedback in real-time. Couldn't ask for a better collaborator.",
    avatar: memojiAvatar4,
  },
  {
    name: "Vikram Singh",
    position: "CTO @ NextGen Labs",
    text: "Gautam's grasp of the full JavaScript ecosystem — from React frontends to Node.js backends with MongoDB — is impressive for someone still in university. He has a bright future ahead.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={"Happy Clients"}
          title={"What Clients Say about Me"}
          description={
            "Don't just take my word for it. See what my clients have to say about my work."
          }
        />

        <div className="mt-12 md:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-[280px] sm:max-w-xs md:max-w-md p-5 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
