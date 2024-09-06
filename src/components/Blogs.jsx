import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { blogPosts } from "../constants";
import reactIntro from "../assets/learn-react-introduction.png"; // Your image file

const BlogPostCard = ({
  index,
  title,
  description,
  tags,
  // image,
  post_link,
}) => {
  return (
    <motion.div
      className="w-full sm:w-[360px] z-10"
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    >
      <div
        onClick={() => window.open(post_link, "_blank")}
        className='bg-tertiary p-5 cursor-pointer rounded-2xl sm:w-[360px] min-h-[450px] sm:max-h-[450px] max-h-max w-[100%] shadow-lg flex flex-col justify-between hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-shadow duration-300 ease-in-out hover:w-full hover:scale-[1.02]'
      >
        {/* Gradient wrapper for image */}
        <div className='w-full green-pink-gradient p-[1px] rounded-2xl shadow-card'>
          <div className='relative w-full h-[230px] bg-tertiary rounded-2xl'>
            <img
              src={reactIntro}
              alt='blog_post_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
        </div>

        <div className='mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[24px] line-clamp-2'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function BlogSection() {
  return (
    <div className='flex flex-col gap-10'>
      {blogPosts?.map((tech, techIndex) => (
        <div key={techIndex} className='border-[1px] border-gray-600 p-8 rounded-lg'>
          {/* Technology Heading */}
          <h2 className='text-white font-bold text-[32px] mb-5'>
            {tech.name}
          </h2>

          {/* Blog Posts under the technology */}
          <div className='flex flex-wrap justify-center items-center gap-7'>
            {tech?.posts?.map((post, index) => (
              <BlogPostCard key={index} index={index} {...post} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(BlogSection, "blogs");
