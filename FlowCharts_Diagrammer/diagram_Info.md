### Diagram Info

Jeg antok at Examination var liksom selve eksamen og Exam var,
Eksamen templaten som kunne lagres eller brukes igjen,

Samtidig lurer jeg på om man skulle ha med feil og poeng i DB ?
Jeg antokk at man viser dette fram med Queries eller Queries på selve Back-Enden,
Så planen var å vise det fram som 4 questions og en av de er en answer, dersom answer ikke blir valgt så er det en feil, 
vis den blir valgt så er det et poeng. 

Answer er en fk av en question, så på INSERT, relaterer en av QUESTION idene til answer ID som gjør det ene Questionet til riktig svar. 