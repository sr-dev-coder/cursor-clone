"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <div>
      <button onClick={() => createProject({
        name: "New Project"
      })}>Add New</button>
      {
        projects?.map((project)=>(
          <div key={project.name}>
            {project.name}
            {project?.ownerId};
          </div>
        ))
      }
    </div>
  );
}
