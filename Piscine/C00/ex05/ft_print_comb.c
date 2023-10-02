/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/08 20:18:44 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/10 14:05:48 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	write_func(char d1, char d2, char d3)
{
	if (d3 > d2 && d2 > d1)
	{
		write(1, &d1, 1);
		write(1, &d2, 1);
		write(1, &d3, 1);
		if (d1 != '7' || d2 != '8' || d3 != '9')
		{
			write(1, ", ", 2);
		}
	}
}

void	ft_print_comb(void)
{
	char	d1;
	char	d2;
	char	d3;

	d1 = '0';
	while (d1 <= '9')
	{
		d2 = '0';
		while (d2 <= '9')
		{
			d3 = '0';
			while (d3 <= '9')
			{
				write_func(d1, d2, d3);
				++d3;
			}
			++d2;
		}
		++d1;
	}
}
