$(document).ready(function() {
	
	$(function() {
		/* Для разукраски input[type="file"]*/
		$('input[type="file"].uploadpicker').each(function() {
			var field = $(this);
			var required = field.is('[required]');
			var disabled = field.is('[disabled]');
			field
				.addClass('upload-field-overlay')
				.removeAttr('required')
				.css({
					cursor: 'pointer',
					fontSize: '200px',
					height: 'auto',
					opacity: 0,
					position: 'absolute',
					right: 0,
					top: '-0.5em',
					width: 'auto'
				})
				.wrap('<span class="widget-upload-field"/>')
			
			var wrapper = field.parent();
			wrapper
				.css({
					backgroundColor: 'transparent',
					display: 'block',
					overflow: 'hidden',
					position: 'relative'
				})
				.prepend('<input class="upload-field-value form-control" type="text"'+(required ? ' required="required"' : '')+(disabled ? ' disabled="disabled"' : '')+' />');
			
			field.bind('change', function() {
				var values = [this.value.split(/[\/\\]/).pop()];
				if (this.files) {
					values = [];
					for (var i = 0; i < this.files.length; i++) {
						values.push(this.files[i].name);
					}
				}
				var parts = $(this).val();
				wrapper.find('.upload-field-value').val(values.join(', '));
			});
		});
	});
});