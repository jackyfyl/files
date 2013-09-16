<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<!-- clothing display -->

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    ?>
<div class="cls_field_images">
    <?    
    print render($content['product:field_image']);
    print render($content['field_index_image']);
    unset($content['product:field_image']);
    unset($content['field_index_image']);
  ?>
</div>
<!--
<?php
/*foreach ($content as $key => $value){
    print $key."\n";
}*/
?>
-->
<?php 
$no_other_content = (count($content) == 2 && array_key_exists('links', $content) && array_key_exists('comments', $content));
?>
<?php if (!$no_other_content){ ?>
    <div class="cls_<?php print $page?"page_":""; ?>field_others">
    <?php if ($title): ?>
        <h4><?php print $title; ?></h4>
    <?php endif; ?>
    <?php print render($content); ?>
    </div>
<?php }?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</article>
