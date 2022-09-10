import PropTypes from 'prop-types';
import {StatisticsWrapper, StatisticsTitle, StatisticsList} from './StatisticsStyled'
import {getRandomHexColor} from './getRandomColor'

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsWrapper>
            <StatisticsTitle>{title}</StatisticsTitle>

            <StatisticsList>
                {
                    stats.map(el => (
                        <li key={el.id} style={bgColor}>
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
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};

const bgColor = {
    backgroundColor: getRandomHexColor(),
}