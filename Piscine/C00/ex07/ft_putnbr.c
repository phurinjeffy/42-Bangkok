/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putnbr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/09 11:50:52 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/10 15:55:41 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

int	length(int nb)
{
	int	len;

	len = 0;
	while (nb != 0)
	{
		nb /= 10;
		++len;
	}
	return (len);
}

int	power(int nb)
{
	int	e;
	int	i;

	i = 0;
	e = 1;
	while (i < length(nb))
	{
		e *= 10;
		++i;
	}
	return (e);
}

void	max_min(int nb)
{
	if (nb == -2147483648)
	{
		write(1, "-2147483648", 11);
	}
	else if (nb == 2147483647)
	{
		write(1, "2147483647", 10);
	}
}

void	ft_putnbr(int nb)
{
	int	i;
	int	e;

	if (nb == -2147483648 || nb == 2147483647)
		max_min(nb);
	else
	{
		if (nb < 0)
		{
			ft_putchar('-');
			nb *= -1;
		}
		i = 0;
		e = power(nb) / 10;
		while (i < length(nb) && nb > 9)
		{
			ft_putchar(nb / e + '0');
			++i;
			nb %= e;
			e /= 10;
		}
		ft_putchar(nb + '0');
	}
}
