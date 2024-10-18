package dev.proyect.proyectJava;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Tarea {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String tarea;
    private boolean Completado;
}
