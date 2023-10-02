/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_range.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <pvanasri@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/24 13:52:30 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/26 16:01:58 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>

int	ft_size(int min, int max)
{
	int	size;

	size = 0;
	while (min < max)
	{
		size++;
		min++;
	}
	return (size);
}

int	*ft_range(int min, int max)
{
	int	*array;
	int	len;
	int	i;

	array = NULL;
	if (min < max)
	{
		len = ft_size(min, max);
		array = (int *)malloc(sizeof(int) * (len));
		i = 0;
		while (i < len)
		{
			array[i] = min;
			min++;
			i++;
		}
	}
	return (array);
}

/*
#include <stdio.h>

int	main(void)
{
	int min = 1;
	int	max = 5;
	int	len = ft_size(min, max);
	int	*array = ft_range(min, max);

	int	i = 0;
	while (i < len)
	{
		printf("%i\n", array[i]);
		i++;
	}
	return (0);
}
*/