import { useParams } from "react-router-dom";
import { projectSample } from "@/data/Project.ts";

function Game() {
  const { id } = useParams<{ id: string }>();

  const project = projectSample.find((p) => p.Title === id);

  if (!project) {
    return <div>Work not found</div>;
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>{project.Title}</h1>
        <p>{project.Description}</p>
        <img src={project.Image} alt="photoProject" />
        <p> {project.Year}</p>
        <p> {project.EngineUsed}</p>
      </div>
    </div>
  );
}

export default Game;
