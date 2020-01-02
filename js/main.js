$( document ).ready( function() {
  /* We have JS! */
  $("html").removeClass("no-js");

  /* Listen for filter change */
  $("input:checkbox[name=filter]").click(hideUnchecked);
  $("input:checkbox#all").click(checkAll);

  /* Set odd/even entries */
  reflowEntries();
});

function hideUnchecked() {
  /* Uncheck the "all" box if one of the filter boxes is unchecked */
  var $checkedBoxes = $('input:checkbox[name=filter]:checked');
  if ($checkedBoxes.length > 0) {
    $('input:checkbox#all').prop('checked', false);
  }

  var filterIds = [];
  $checkedBoxes.each(function() {
    filterIds.push(this.id);
  });

  var $timelineEntry = $('.timeline-entry');
  $timelineEntry.each(function() {
    var $this = $(this);
    if (!hasOverlap($this.data('category'), filterIds)) {
      $this.hide();
    } else {
      $this.show();
    }
  });

  reflowEntries();
}

function checkAll() {
  $('input:checkbox[name=filter]').prop("checked", true);
  $('.timeline-entry').each(function() {
    $(this).show();
  });
  reflowEntries();
}

function hasOverlap(categories, ids) {
  return ids.some(function (id) {
    return categories.indexOf(id) >= 0;
  });
}

function reflowEntries() {
  $('.timeline-entry').removeClass("odd even first");
  $('.timeline-entry:visible:first').addClass("first");
  $('.timeline-entry:visible:odd').addClass("odd");
  $('.timeline-entry:visible:even').addClass("even");
}