package dev.proyect.proyectJava;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(maxAge = 5600)
@RepositoryRestResource(path = "tareas", collectionResourceRel = "tareas")
public interface TareaRepository extends JpaRepository<Tarea, Integer> {
}
