import * as ui from '@/lib/ui';

const SlugPage = ({
	params,
}: any) => {
	return (
		<div className="slug-page">
			<ui.PageTitle>
				Page :: {params.slug}
			</ui.PageTitle>
		</div>
	);
};

export default SlugPage;
