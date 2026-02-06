import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
 {
    id: 1,
    image: card2,
    category: "Web Development",
    title: "Cloud-Native Web Platform & Microservices",
    description:
      "On top of the cloud infrastructure, we implemented a microservices-based web application using Spring Boot for the backend and Angular 17 for the frontend, with MySQL as the database. Each service is independently deployed and managed within the Kubernetes cluster, enabling scalability and fault isolation. The platform includes JWT-based security, real-time WebSocket notifications, and AI-powered features such as pet breed detection, intelligent matching, and a chatbot assistant. This architecture ensures a responsive, secure, and user-centric experience while fully leveraging the underlying cloud ecosystem.",
    link: "#!",
  },
  {
    id: 2,
    image: card1,
    category: "Cloud & Infrastructure",
    title: "Hybrid Cloud Infrastructure and Kubernetes Automation",
    description:
      "In this phase, we designed and deployed a hybrid cloud architecture combining OpenStack (on-premise) and AWS, ensuring flexibility, cost optimization, and high availability. The infrastructure was fully automated using Ansible, enabling consistent provisioning and configuration across environments. A Kubernetes cluster orchestrates all services, while Docker ensures portability and cloud-native deployment. To guarantee reliability and observability, we integrated Prometheus, Grafana, and Node Exporter for real-time monitoring, performance tracking, and proactive issue detection.",
    link: "#!",
  },
 
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
