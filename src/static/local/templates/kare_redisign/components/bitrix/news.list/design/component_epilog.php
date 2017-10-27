<?php
/**
 * @var array $arResult
 * @var array $arParams
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $templateFile
 * @var string $templateFolder
 * @var string $componentPath
 * @var \CMain $APPLICATION
 */
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}?>

<div class="text-block--small">
	<div class="custom-container">
		<div class="two-parts two-parts--reverse">
			<div class="">
				<? if (CModule::IncludeModule('form')) {
					$APPLICATION->IncludeComponent(
						'bitrix:form.result.new',
						strtolower($arResult['FORM']['SID']),
						Array(
							"AJAX_MODE" => "N",
							"SEF_MODE" => "N",
							"WEB_FORM_ID" => $arResult['FORM']['ID'],
							"START_PAGE" => "new",
							"SHOW_LIST_PAGE" => "N",
							"SHOW_EDIT_PAGE" => "N",
							"SHOW_VIEW_PAGE" => "N",
							"SUCCESS_URL" => "",
							"SHOW_ANSWER_VALUE" => "N",
							"SHOW_ADDITIONAL" => "N",
							"SHOW_STATUS" => "N",
							"EDIT_ADDITIONAL" => "N",
							"EDIT_STATUS" => "Y",
							"NOT_SHOW_FILTER" => "",
							"NOT_SHOW_TABLE" => "",
							"CHAIN_ITEM_TEXT" => "",
							"CHAIN_ITEM_LINK" => "",
							"IGNORE_CUSTOM_TEMPLATE" => "N",
							"USE_EXTENDED_ERRORS" => "Y",
							"CACHE_TYPE" => "N",
							"CACHE_TIME" => "3600",
							"AJAX_OPTION_JUMP" => "N",
							"AJAX_OPTION_STYLE" => "N",
							"AJAX_OPTION_HISTORY" => "N",
							"VARIABLE_ALIASES" => Array(
								"action" => "action"
							),
							'ACTION_URL' => '/ajax/ajax-forms.php',
						),
						false
					);
				} ?>
			</div>

			<div class="cubes-wrap">
				<div class="cubes">
					<p><br>
						<a href="<?=$arResult['CUBE']['PROPERTIES']['LINK']['VALUE']?>">Библиотека 3D-моделей</a>
					</p>
				</div>
				<?=$arResult['CUBE']['~PREVIEW_TEXT']?>
				<!--todo:email положить в конфиг-->
				<p class="gray-text"></p>
			</div>
		</div>
	</div>
</div>