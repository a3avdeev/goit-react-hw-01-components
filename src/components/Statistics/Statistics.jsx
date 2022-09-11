import PropTypes from 'prop-types';
import {StatisticsWrapper, StatisticsTitle, StatisticsList} from './Statistics.Styled'
import {getRandomHexColor} from './getRandomColor'

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsWrapper>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <StatisticsList>
                {
                    stats.map(el => (
                        <li key={el.id} style={{backgroundColor: getRandomHexColor()}}>
                            <span>{el.label}</span>
                            <span>{el.percentage}%</span>
                        </li>
                    ))
                }
            </StatisticsList>
        </StatisticsWrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};
