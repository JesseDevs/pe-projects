<resume-section>

   <h3 class='attention-voice'><?= $section['heading']; ?></h3>

   <text-content>
     <p class='intro'><?= $section['intro']; ?></p>
  </text-content>


  <h4 class='chant-voice'>Work History</h4>
  <?php renderList($resumeData, "job"); ?>

  <h4 class='chant-voice'>Education History</h4>
  <?php renderList($resumeData, "education"); ?>


</resume-card>
