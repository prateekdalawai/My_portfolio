import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

type HomeProps = {
  githubProfileData: GithubUserType | null;
};

export default function Home({ githubProfileData }: HomeProps) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      {githubProfileData ? <GithubProfileCard {...githubProfileData} /> : null}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`https://api.github.com/users/${openSource.githubUserName}`);

    if (!response.ok) {
      throw new Error(`GitHub profile request failed: ${response.status}`);
    }

    const githubProfileData: GithubUserType = await response.json();

    return {
      props: { githubProfileData },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Unable to load GitHub profile", error);

    return {
      props: { githubProfileData: null },
      revalidate: 3600,
    };
  }
}
