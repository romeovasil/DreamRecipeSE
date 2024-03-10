package com.example.demo.Domain;

public class FormDTO {
    Boolean vegan;
    Boolean lowSodium;
    Boolean lowKcal;
    Boolean highProtein;
    Boolean logSugar;
    String duration;

    public Boolean getVegan() {
        return vegan;
    }

    public void setVegan(Boolean vegan) {
        this.vegan = vegan;
    }

    public Boolean getLowSodium() {
        return lowSodium;
    }

    public void setLowSodium(Boolean lowSodium) {
        this.lowSodium = lowSodium;
    }

    public Boolean getLowKcal() {
        return lowKcal;
    }

    public void setLowKcal(Boolean lowKcal) {
        this.lowKcal = lowKcal;
    }

    public Boolean getHighProtein() {
        return highProtein;
    }

    public void setHighProtein(Boolean highProtein) {
        this.highProtein = highProtein;
    }

    public Boolean getLogSugar() {
        return logSugar;
    }

    public void setLogSugar(Boolean logSugar) {
        this.logSugar = logSugar;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}
